import React, { Component } from "react";

import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "services/api";

import css from "./App.module.css"

export class App extends Component {
  state = {
      page: 1,
      query: '',
      images: [],
      isLoading: false,
      showModal: false,
      largeImageURL: '',
      webformatURL: '',
      error: null,
    };

  onSubmit = (query) => {
    if (query !== this.state.query) {
      this.setState({ images: [], page: 1, query }, () => {
        this.fetchQuery(query);
      })
    }
  };

  fetchQuery = async (value) => {
    this.setState({ isLoading: true, error: null })
    try {
      const response = await fetchImages(value, this.state.page);
      const dataArray = [];
      response.map(({ id, webformatURL, largeImageURL }) =>dataArray.push({ id, webformatURL, largeImageURL })
      )
      if (dataArray.length === 0) {
        return alert(" Not found any picture! ");
      };
      this.setState((prevState) => ({
       images: [...prevState.images, ...response],
      }))
  }   catch(error){
      this.setState ({ error });
    } finally {
      this.setState ({ isLoading: false })
    }
  }
  
  
  loadMore = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchQuery(this.state.query);
    });
  };

  onOpen = (largeImageURL) => {
    this.setState({ showModal: true, largeImageURL: largeImageURL })
  };

  onClose = () => {
    this.setState({ showModal: false, largeImageURL: "" })
  }
  
  render() {
    const { images, isLoading, showModal, largeImageURL } = this.state;
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit}/>
        <ImageGallery images={images} onOpen={this.onOpen}/>
        { isLoading && <Loader /> }
        { images.length > 1 && ( 
        <Button onClick={this.loadMore}/> 
        )} 
        { showModal && (
        <Modal
        largeImage={largeImageURL}
        onClose={this.onClose}
        />
        )}
      </div>
    )
  }
}