import styled from "styled-components";

// Обёртка для заголовка и списка ингредиентов с градиентным фоном
export const IngredientsWrapper = styled.div`
  background: linear-gradient(
    135deg,
    #27355a 0%,
    /* Начальный цвет */ #27355a 40%,
    /* Цвет почти до середины */ #2b395d 60%,
    /* Цвет в середине */ #334063 80%,
    /* Цвет ближе к концу */ #3b4766 100% /* Конечный цвет */
  );
  border-radius: 32px; /* Радиус скругления для более круглых краев */
  padding: 20px;
  color: #ffffff; /* Цвет текста */
  margin-top: 30px; /* Отступ сверху */
  width: 100%; /* Ширина контейнера */
  max-width: 500px; /* Максимальная ширина контейнера */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Тень для глубины */

  h2.ingredients-title {
    margin-top: 0; /* Убираем отступ сверху у заголовка */
    font-size: 25px; /* Размер шрифта заголовка */
    margin-bottom: 20px; /* Отступ снизу заголовка */
    font-family: "Times New Roman", serif; /* Шрифт заголовка */
  }

  ul {
    padding-left: 0; /* Убираем отступ слева у списка */
  }

  @media (max-width: 1200px) {
    max-width: 450px; /* Уменьшаем максимальную ширину */
    padding: 15px;

    h2.ingredients-title {
      font-size: 22px; /* Уменьшаем размер шрифта заголовка */
    }

    ul {
      font-size: 15px; /* Уменьшаем размер шрифта в списке */
    }
  }

  @media (max-width: 992px) {
    max-width: 400px; /* Еще больше уменьшаем максимальную ширину */
    padding: 10px;

    h2.ingredients-title {
      font-size: 20px; /* Уменьшаем размер шрифта заголовка */
    }

    ul {
      font-size: 14px; /* Уменьшаем размер шрифта в списке */
    }
  }

  @media (max-width: 768px) {
    max-width: 100%; /* Заполняем доступную ширину */
    padding: 10px;
    margin-top: 20px; /* Уменьшаем отступ сверху */

    h2.ingredients-title {
      font-size: 18px; /* Уменьшаем размер шрифта заголовка */
    }

    ul {
      font-size: 13px; /* Уменьшаем размер шрифта в списке */
    }
  }
`;

// Новый стиль для заголовка "Ingredient Photos"
export const IngredientPhotosTitle = styled.h2`
  font-size: 30px; /* Размер шрифта заголовка */
  font-family: "Times New Roman", serif; /* Шрифт заголовка */
  color: #ffffff; /* Цвет текста */
  margin-top: 30px; /* Отступ сверху */
  margin-bottom: 20px; /* Отступ снизу */

  @media (max-width: 1200px) {
    font-size: 28px; /* Уменьшаем размер шрифта заголовка */
  }

  @media (max-width: 992px) {
    font-size: 24px; /* Уменьшаем размер шрифта заголовка */
  }

  @media (max-width: 768px) {
    font-size: 20px; /* Уменьшаем размер шрифта заголовка */
  }
`;

// Стили для элементов списка ингредиентов
export const IngredientItem = styled.li`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 300; /* Тонкий шрифт */
  font-stretch: expanded; /* Расширение шрифта (если поддерживается) */
  color: rgba(255, 255, 255, 0.7); /* Цвет текста - светло-серый белый */
  list-style: none; /* Убираем маркеры списка */
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 24px; /* Отступ слева для текста, чтобы не налегал на маркер */

  &:before {
    content: ""; /* Пустой контент для маркера */
    width: 12px;
    height: 12px;
    border: 2px solid rgba(255, 255, 255, 0.7); /* Белый круг */
    border-radius: 50%; /* Делаем круг */
    position: absolute;
    left: 0; /* Расположение круга слева */
    top: 50%;
    transform: translateY(-50%); /* Вертикальное выравнивание по центру */
  }

  @media (max-width: 1200px) {
    font-size: 15px; /* Уменьшаем размер шрифта элемента списка */
  }

  @media (max-width: 992px) {
    font-size: 14px; /* Уменьшаем размер шрифта элемента списка */
  }

  @media (max-width: 768px) {
    font-size: 13px; /* Уменьшаем размер шрифта элемента списка */
  }
`;

// Контейнер для изображений ингредиентов
export const IngredientImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 5px; /* Уменьшаем расстояние между изображениями на маленьких экранах */
    margin-top: 15px;
  }
`;

// Стили для изображений ингредиентов
export const IngredientImage = styled.img`
  max-width: 100px;
  height: auto;
  border-radius: 8px;

  @media (max-width: 768px) {
    max-width: 80px; /* Уменьшаем размер изображений на маленьких экранах */
  }
`;
