import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import uniqid from "uniqid";

import style from "./Phonebook.module.css";
import logoTransition from "../../transitions/logoTransition.module.css";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Notification from "../Notification/Notification";

export default class Phonebook extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
    isAlertShow: false,
    isLogoShow: false,
  };

  componentDidMount() {
    this.setState((state) => ({ isLogoShow: !state.isLogoShow }));
    const contactsLS = localStorage.getItem("contacts");

    if (contactsLS) {
      const contacts = JSON.parse(contactsLS);

      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  isUniqueName = ({ name }) => {
    return !this.state.contacts.some((el) => el.name === name);
  };

  handleSubmit = (contact) => {
    if (this.isUniqueName(contact)) {
      const newContact = { id: uniqid(), ...contact };

      this.setState((state) => ({
        contacts: [...state.contacts, newContact],
      }));
    } else {
      this.setState((state) => ({ isAlertShow: !state.isAlertShow }));

      setTimeout(() => {
        this.setState((state) => ({ isAlertShow: !state.isAlertShow }));
      }, 3000);
    }
  };

  handleFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = (id) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((el) => el.id !== id),
    }));
  };

  filterContactsByName = (contacts, filter) => {
    const filtred = contacts.filter((el) =>
      el.name.toLowerCase().includes(filter.toLowerCase()),
    );

    return this.sortContactsAlphabetically(filtred);
  };

  sortContactsAlphabetically = (contacts) => {
    const sortedArr = [...contacts];

    return sortedArr.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name < b.name) return 1;
      return 0;
    });
  };

  render() {
    const { contacts, filter, isAlertShow, isLogoShow } = this.state;
    const filtredContacts = this.filterContactsByName(contacts, filter);
    const sortedContacts = this.sortContactsAlphabetically(contacts);

    return (
      <div>
        <div className={style.logoWrap}>
          <CSSTransition
            in={isLogoShow}
            timeout={500}
            classNames={logoTransition}
          >
            <h2 className={style.logo}>Phonebook</h2>
          </CSSTransition>
        </div>

        <ContactForm onAddContact={this.handleSubmit} />

        <h2 className={style.title}>Contacts</h2>

        <Filter
          onFilter={this.handleFilter}
          value={filter}
          isShow={contacts.length >= 2}
        />

        <ContactList
          contacts={filter.length ? filtredContacts : sortedContacts}
          onDelete={this.handleDelete}
        />

        <Notification isShow={isAlertShow} text="Contact is already exist" />
      </div>
    );
  }
}
