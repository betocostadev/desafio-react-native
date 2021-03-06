import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import ContainerScroll from '../../components/ContainerScrollView';
import ContainerLogoGama from '../../components/LogoGama';
import {
    ContainerConfirmation,
    TextConfirmation,
    ImageConfirmation,
    Container,
} from './styles';
import ButtonPrimary from '../../components/ButtonPrimary';

export default function ConfirmAccountCreate() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            if (!(e.data.action.type === 'NAVIGATE')) {
                e.preventDefault();
                return;
            }
        });
    }, [navigation]);

    function navLogin() {
        navigation.navigate('Login');
    }

    return (
        <ContainerScroll>
            <Container>
                <ContainerLogoGama mTop="60px" />
                <ContainerConfirmation>
                    <ImageConfirmation
                        source={require('../../assets/ok-create-account.png')}
                    />
                    <TextConfirmation>
                        Conta criada com sucesso!
                    </TextConfirmation>
                    <ButtonPrimary
                        title="Login"
                        iconName="arrow-right"
                        iconColor="#fff"
                        iconSize={25}
                        marginTop="20px"
                        marginBottom="30px"
                        bgColor="#71b8dc"
                        color="#fff"
                        onPress={navLogin}
                        _width="60%"
                    />
                </ContainerConfirmation>
            </Container>
        </ContainerScroll>
    );
}
