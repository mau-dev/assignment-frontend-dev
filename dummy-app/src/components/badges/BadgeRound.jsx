import styled from "@emotion/styled";

const BadgeRound = styled.div(props => ({
  backgroundColor: props.theme.colors.primary,
  borderRadius: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  verticalAlign: 'center',
  height: '17px',
  width: '17px',
  fontSize: '0.5em',
  color: '#ffffff',
  border: '2px solid white',
  position: 'absolute',
  top: '-0.6em',
  left: '1.4em'


}));

export default BadgeRound;