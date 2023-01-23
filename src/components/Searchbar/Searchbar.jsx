import { Component } from "react";
import PropTypes from 'prop-types';

import css from '../Searchbar/Searchbar.module.css'

export class Searchbar extends Component {

    handleChange = (event) => {
        this.setState({ query: event.target.value.toLowerCase() })
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        if (event.target.search.value.trim() === "") {
            return alert(" Enter query! ");
        }

        this.props.onSubmit(event.target.search.value);
    };


    render() {
        return(
            <header className= {css.searchbar}>
            <form className={css.form} onSubmit={this.handleOnSubmit}>
                <button type="submit" className={css.searchForm__button}>
                <span className={css.searchFormButton__label}>Search</span>
                </button>

                <input
                className = {css.searchForm__input}
                type="text"
                autocomplete="off"
                autofocus
                placeholder="Search images and photos"
                name='search'
                onChange={this.handleChange}
                />
            </form>
            </header> 
        )
    }
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleOnSubmit: PropTypes.func.isRequired,
};
