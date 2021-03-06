import React from "react";
import PropTypes from "prop-types";

import styles from "./ContactListItem.module.css";

import DeleteBtn from "../DeleteBtn/DeleteBtn";

const ContactListItem = ({ name, number, onDelete, id }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li className={styles.listItem}>
      {name}: {number}
      <DeleteBtn onDelete={handleDelete} />
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactListItem;
