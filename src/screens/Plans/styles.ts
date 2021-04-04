import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const HeaderDashboard = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-flow: row;
    width: ${Dimensions.get('window').width}px;
    padding: 15px 35px 58px;
`;

export const TextHeaderDashboard = styled.Text`
    font-size: 26px;
    font-weight: 700;
    text-align: left;
    color: #fbfbfb;
`;

export const CloseButton = styled(RectButton)`
    width: 100%;
    max-width: 33px;
`;

export const HeaderCard = styled.View`
    width: 100%;
    max-width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-flow: row;
`;

export const IconHeaderCard = styled.Image`
    width: 100%;
    max-width: 24px;
`;

export const TextHeaderCard = styled.Text`
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    color: #9b9b9b;
    padding-left: 10px;
`;

export const RowLastHistoric = styled.View`
    width: 100%;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`;

export const LineRowSeparatorHistoric = styled.Text`
    color: #71b8dc;
    font-size: 20px;
`;

export const ViewPlans = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    border: 2px solid #71b8dc;
    border-radius: 10px;
    margin-top: 15px;
    padding: 25px 0;
`;

export const TextViewPlans = styled.Text`
    font-size: 14px;
    color: #000000;
    text-align: center;
`;

export const LettersViewPlans = styled.Text`
    position: absolute;
    top: -10px;
    right: -10px;
    color: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 30px;
    width: 30px;
    padding-top: 4px;
    background-color: #71b8dc;
    border-radius: 50px;
    font-size: 16px;
`;
