import styled from 'styled-components';

export const CardStyle = styled.div`
  border: 4px solid grey;
  border-radius: 2rem;
  padding: 1rem;
`;

export const BtnRow = styled.div`
  display: flex;
`;

export const ToggleButton = styled.button<{ on: boolean }>`
  background: ${({ on }) => (on ? 'yellow' : '#ddd')};
`;
