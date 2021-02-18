import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { hidePopupAction } from 'src/redux/app/appAction';
import { PopupButton, PopupState } from './types';
import { RootState } from 'src/redux/types';
import { AppColor, AppFontSize, AppSpacing } from 'src/styles';
import { AppText, AppView, Space } from '..';
import { PrimaryButton, SecondaryButton } from '../button';
import styles from './style';
import { Props } from './types';

const AppPopup = (props: Props) => {
    const { visible, message, icon, buttons, title }: PopupState = useSelector(
        (state: RootState) => state.appReducer.popup,
    );
    const dispatch = useDispatch();

    function _onPressOverlay() {
        // dispatch(hidePopupAction());
    }

    function _onPressButton({ onPress, isAutoClose = true }: PopupButton) {
        onPress && onPress();
        isAutoClose && dispatch(hidePopupAction());
    }

    return visible ? (
        <TouchableOpacity style={styles.container} activeOpacity={1} onPress={_onPressOverlay}>
            <AppView style={styles.popup} alignItemsCenter>
                {icon && (
                    <>
                        {icon}
                        <Space height={12} />
                    </>
                )}

                <AppText center bold size={AppFontSize.SIZE_18} color={AppColor.DARK_GREY_1}>
                    {title}
                </AppText>
                <Space height={12} />
                <AppText center color={AppColor.GREY_8D}>
                    {message}
                </AppText>
                <Space height={24} />
                <FlatList
                    style={styles.buttonContainer}
                    data={buttons}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return item.style || item.style == 'negative' ? (
                            <SecondaryButton
                                buttonStyle={styles.secondaryButtonStyle}
                                title={item.title}
                                titleStyle={styles.secondaryButtonTitle}
                                onPress={() => _onPressButton(item)}
                            />
                        ) : (
                            <PrimaryButton title={item.title} onPress={() => _onPressButton(item)} />
                        );
                    }}
                    ItemSeparatorComponent={() => <Space height={AppSpacing.MEDIUM} />}
                />
            </AppView>
        </TouchableOpacity>
    ) : null;
};
export default AppPopup;
