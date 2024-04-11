import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

export default class ReviewCards extends Component {
    render() {
        return (
            <div>
                <div className='review'>
                    <section>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7t3pIkE-Pr0qsQpOsF_lFbF5Hb54Y0g_vGr_pQOC2w&s' alt='prifile'></img>
                    </section>
                    <article>
                        <h3>Alex Josh</h3>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora tenetur quis eveniet.</span>
                        <div className='rate'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD43B", }} />
                        </div>
                    </article>
                </div>
            </div>
        )
    }
}
