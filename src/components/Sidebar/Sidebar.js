import React from "react"
import PropTypes from "prop-types"
import './Sidebar.css'

const Sidebar = ({ users }) => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        {users.map(user => (
            <li key={user.name}>
              <img alt='avatar' src={user.avatar} />
              <span>{user.name}</span>
            </li>
        ))}
      </ul>
    </aside>
)}

Sidebar.propTypes = {
  users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string,
      }).isRequired
  ).isRequired
}

export default Sidebar