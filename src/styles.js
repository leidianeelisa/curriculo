import { yellow } from '@carbon/colors';
import styled from 'styled-components';

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  font-size: 2.65rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  padding: 0.5rem 1rem;
  background-color: ${yellow};
  color: #393939;
  border-radius: 5px;
  font-weight: bold;
`;