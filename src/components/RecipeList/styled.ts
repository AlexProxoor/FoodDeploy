import styled from "styled-components";

export const Centered = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Выравнивание по левому краю */
  padding-left: 10%; /* Такой же отступ, как и у карточек */
  margin-top: 20px; /* Отступ сверху */
  margin-bottom: 20px; /* Отступ снизу */

  &::before {
    content: "|"; /* Вертикальная полоса */
    margin-right: 10px; /* Отступ между полосой и текстом */
    color: orange; /* Оранжевый цвет для полосы */
    font-size: 24px; /* Размер полосы */
  }

  h2 {
    margin: 0; /* Убираем стандартные отступы у заголовка */
    font-size: 24px; /* Размер текста для больших экранов */
    color: black; /* Черный цвет текста */

    @media (max-width: 1200px) {
      font-size: 22px; /* Размер текста для средних экранов */
    }

    @media (max-width: 768px) {
      font-size: 20px; /* Размер текста для малых экранов */
    }

    @media (max-width: 480px) {
      font-size: 18px; /* Размер текста для очень малых экранов */
    }

    @media (max-width: 390px) {
      font-size: 16px; /* Размер текста для самых маленьких экранов */
    }
  }

  &::before {
    @media (max-width: 1200px) {
      font-size: 22px; /* Размер полосы для средних экранов */
    }

    @media (max-width: 768px) {
      font-size: 20px; /* Размер полосы для малых экранов */
    }

    @media (max-width: 480px) {
      font-size: 18px; /* Размер полосы для очень малых экранов */
    }

    @media (max-width: 390px) {
      font-size: 16px; /* Размер полосы для самых маленьких экранов */
    }
  }
`;

export const RecipeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 карточки в ряду */
  gap: 20px;
  justify-content: center;
  padding: 0 10%; /* Отступы по бокам */
  box-sizing: border-box; /* Для учета паддингов в ширине */

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr); /* 3 карточки в ряду */
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 карточки в ряду */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 карточка в ряду */
  }
`;

export const RecipeCardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  img {
    border-radius: 10px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 10px; /* Добавляем отступ снизу */
  }

  h3 {
    margin: 0;
    font-size: 18px;
    color: #2E266F;

  a {
    text-decoration: none;
    color: #333;
  }
`;
