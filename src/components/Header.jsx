import React from "react";
//Utilizamos style components y la libreria Emotion para los estilos
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const TextoHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27", serif;
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  );
};

Header.prototypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
