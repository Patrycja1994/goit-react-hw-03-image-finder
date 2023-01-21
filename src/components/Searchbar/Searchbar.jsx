import { Component } from "react";
import PropTypes from 'prop-types';

import css from '../Searchbar/Searchbar.module.css'

export class Searchbar extends Component {
    render() {
        return(
            <header className= {css.searchbar}>
            <form className={css.form} onSubmit={this.props.onSubmit}>
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
                />
            </form>
            </header> 
        )
    }
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func,
};
