import React, { Component, ErrorInfo } from "react";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 83vh;
  width: 100%; /* Ширина на весь экран */
  max-width: 1200px; /* Максимальная ширина контейнера */
  margin: 0 auto; /* Центрирование контейнера по горизонтали */
  text-align: center;
  padding-top: 20vh; /* Отступ сверху, чтобы поднять контент выше */

  box-sizing: border-box; /* Учитывает отступы и границы в ширине контейнера */
`;

const ErrorCode = styled.h1`
  font-size: 100px;
  color: red;
  margin: 0;
`;

const ErrorMessage = styled.h2`
  font-size: 36px;
  color: black;
  margin: 10px 0;
`;

const SubMessage = styled.p`
  font-size: 18px;
  color: grey;
  margin: 10px 0;
`;

const HomeButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;

  &:hover {
    background-color: #0056b3;
  }
`;

class ErrorBoundary extends Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <NotFoundContainer>
          <ErrorCode>404</ErrorCode>
          <ErrorMessage>OOOps! Page Not Found</ErrorMessage>
          <SubMessage>
            This page doesn't exist or was removed! We suggest you back to home.
          </SubMessage>
          <HomeButton onClick={() => (window.location.href = "/")}>
            Back to homepage
          </HomeButton>
        </NotFoundContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
