import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import ContainerScroll from '../../components/ContainerScrollView';
import ContainerViewDashboard from '../../components/ContainerDashboard';
import WhiteCardDashboard from '../../components/WhiteCardDashboard';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store';
import { Feather } from '@expo/vector-icons';

export default function Plans() {
    const navigation = useNavigation();

    const { user } = useSelector((state: IRootState) => state.user);

    const { transactionTypes } = useSelector(
        (state: IRootState) => state.accounts
    );

    const transactionTypesKeys =
        transactionTypes && Object.keys(transactionTypes);

    return (
        <ContainerScroll>
            <ContainerViewDashboard>
                <S.HeaderDashboard>
                    <S.TextHeaderDashboard>
                        Olá, {user?.userName}
                    </S.TextHeaderDashboard>
                    <S.CloseButton onPress={() => navigation.goBack()}>
                        <Feather name="x" size={33} color="#fbfbfb" />
                    </S.CloseButton>
                </S.HeaderDashboard>
                <WhiteCardDashboard
                    _MarginBottom="100px"
                    _Padding="20px 20px 40px"
                >
                    <S.HeaderCard>
                        <S.IconHeaderCard
                            source={require('../../assets/icon-money.png')}
                        />
                        <S.TextHeaderCard>Planos</S.TextHeaderCard>
                    </S.HeaderCard>
                    {transactionTypesKeys?.map((key) =>
                        transactionTypes![key].map((type) => {
                            return type.descricao && type.tipoMovimento ? (
                                <S.RowLastHistoric key={type.id}>
                                    {/* <S.LineRowSeparatorHistoric>
                                        |
                                    </S.LineRowSeparatorHistoric> */}
                                    <S.ViewPlans>
                                        <S.TextViewPlans>
                                            {type.descricao === 'DEPESAS'
                                                ? 'DESPESAS'
                                                : type.descricao}
                                        </S.TextViewPlans>
                                        <S.LettersViewPlans>
                                            {type.tipoMovimento}
                                        </S.LettersViewPlans>
                                    </S.ViewPlans>
                                </S.RowLastHistoric>
                            ) : (
                                false
                            );
                        })
                    )}
                </WhiteCardDashboard>
            </ContainerViewDashboard>
        </ContainerScroll>
    );
}
