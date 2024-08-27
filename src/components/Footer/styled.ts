import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #27355a; /* Цвет фона футера */
  color: white; /* Цвет текста */
  text-align: center; /* Выравнивание текста по центру */
  padding: 20px; /* Отступы вокруг текста */
  position: relative; /* Чтобы футер находился в правильном месте */
  bottom: 0;
  width: 100%;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1); /* Легкая тень для отделения футера от контента */

  p {
    margin: 0; /* Убираем отступы по умолчанию у параграфа */
    font-size: 14px; /* Размер шрифта */
  }
`;
