import styled from '@emotion/styled';

interface PokeNameChipProps {
  name: string;
  id: number;
  color: string;
}

const PokeNameChip = (props: PokeNameChipProps) => {
  const renderNumber = (id: number) => {
    const digits = 3;
    const numberString = id.toString();

    if (digits <= numberString.length) {
      return numberString;
    }

    let result = '';
    for (let i = 0; i < digits - numberString.length; i++) {
      result += 0;
    }
    return `${result}${numberString}`;
  };

  return (
    <Chip>
      <NumberChip color={props.color}>
        <Number>{renderNumber(props.id)}</Number>
      </NumberChip>
      <Text>{props.name}</Text>
    </Chip>
  );
};
const Chip = styled.div`
  border: 1px solid #c0c0c0;
  align-items: center;
  border-radius: 16px;
  display: flex;

  font-weight: bold;
  box-shadow: 0.5px 0.5px 00 #c0c0c0;
`;

const NumberChip = styled.div<{ color: string }>`
  padding: 4px 6px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
  opacity: 0.8;
`;

const Number = styled.label`
  opacity: 1;
`;

const Text = styled.label`
  margin: 0 8px 0 5px;
`;

export default PokeNameChip;
