import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface ContainerProps {
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 50px;
    background-color: #fff;
    /* border-bottom-width: 2px;
    border-bottom-color: #878686;
    border-style: solid; */
    border: 1px;
    border-color: #cfd8dc;
    border-radius: 5px;
    padding: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: #999;
    position: relative;

    ${(props) =>
        props.isErrored &&
        css`
            border-bottom-width: 2px;
            border-bottom-color: #e6505c;
            border-style: solid;
        `}
`;

export const Icon = styled(Feather)`
    margin-right: 0px;
`;

export const TextInput = styled.TextInput`
    color: #999;
    font-size: 17px;
    width: 100%;
    padding-bottom: 5px;
`;

export const MaxValue = styled.Text`
    padding: 5px 10px;
    border-radius: 5px;
    color: #71b8dc;
    position: absolute;
    top: 50px;
`;
