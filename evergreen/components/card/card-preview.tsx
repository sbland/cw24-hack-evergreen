import styled from 'styled-components';

export interface ICardPreviewProps {
  name: string;
  description: string;
}

export const PreviewCardStyle = styled.div`
  border: 1px solid grey;
  border-radius: 1rem;
  padding: 1rem;
`;

export const CardPreview = ({ name, description }: ICardPreviewProps) => {
  return (
    <PreviewCardStyle className="card">
      <h1>{name}</h1>
      <p>{description}</p>
    </PreviewCardStyle>
  );
};
