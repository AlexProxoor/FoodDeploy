import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  gap: 20px; /* Отступ между селектами */
  box-sizing: border-box;
  justify-content: center; /* Центрирование содержимого по горизонтали */

  /* Медиа-запрос для экранов шириной 768px и меньше */
  @media (max-width: 390px) {
    flex-direction: column; /* Переключаем расположение на вертикальное */
    align-items: center; /* Центрируем содержимое по горизонтали */
  }
`;

export const StyledSelect = styled.select`
  width: 25%; /* Селекты занимают 25% ширины контейнера */

  padding: 10px;
  border-radius: 25px;
  border: 2px solid orange;
  background-color: white;
  color: black; /* Цвет текста */
  font-size: 16px;
  font-family: "Arial", sans-serif;

  /* Увеличение ширины селектов на мобильных устройствах */
  @media (max-width: 390px) {
    width: 100%; /* Селекты занимают всю ширину контейнера */
    margin-bottom: 5px; /* Отступ снизу между селектами */
  }

  &:focus {
    border-color: orange; /* Цвет границы при фокусе */
    outline: none; /* Убираем стандартное выделение */
    box-shadow: 0 0 5px rgba(255, 165, 0, 0.5); /* Тень вокруг при фокусе */
  }
`;

export const StyledOption = styled.option`
  font-family: "Arial", sans-serif; /* Пример шрифта для опций */
`;
