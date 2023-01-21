import React, { Component } from "react";

import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { fetchImages } from "services/api";

import css from "./App.module.css"


export class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      query: '',
      images: [],
      isLoading: false,
      showButton: false,
      showModal: false,
      largeImageURL: '',
    };
  }

  onClose = () => {
    this.setState({showModal:false, largeImageURL: ''})
  }

  onOpen = largeImageURL => {
    this.setState({showModal: true, largeImageURL: largeImageURL})
  }

  onSubmit = event => {
    event.preventDefault();
    this.setState ({
      query: event.target.search.value,
      isLoading: true,
      images: [],
    })
    this.search(event.target.search.value, this.state.page);
  };

  nextPage = () => {
    this.setState ({
      page: this.state.page + 1,
      isLoading:true,
    })
    this.search(this.state.query, this.state.page + 1);
  };
  
  async search ( query, page ) {
      const response = await fetchImages ( query, page );
      this.setState( prevState => {
        return {
          images: [...prevState.images, ...response],
        }
      })
      if (response.lenght < 12) {
        this.setState({showButton:false});
      }
      if(response.lenght === 12) {
        this.setState({showButton:true});
      }
    }

  render() {
    const { images, isLoading, showButton, showModal, largeImageURL } = this.state;
    
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery images={images} onOpen={this.onOpen}/>
        { isLoading && <Loader /> }
        { showButton && <Button nextPage={this.nextPage}/> } 
        { showModal && (
        <Modal
        largeImageURL={largeImageURL}
        onClose={this.onClose}
        />
        )}
      </div>
    )
  }
}