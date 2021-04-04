import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 

function NavBar({ totalCount }) {

  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link className="nav__link" to="/">Products list</Link></li>
        <li className="nav__item">
          <Link className="nav__link" to="/cart">
            Cart <span role="img" aria-label="cart">&#128722;</span>{totalCount}
          </Link>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  totalCount: state.cart.totalCount
});

export default connect(mapStateToProps)(NavBar);