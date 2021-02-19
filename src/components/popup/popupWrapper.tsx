import { hidePopupAction, showPopupAction } from 'src/redux/app/appAction';
import { PopupButton } from './types';
import store from 'src/redux/store';

function showPopup(title: string, message: string, icon: any, buttons: PopupButton[]) {
    store.dispatch(showPopupAction(title, message, icon, buttons));
}

function hidePopUp() {
    store.dispatch(hidePopupAction());
}

export { showPopup, hidePopUp };
