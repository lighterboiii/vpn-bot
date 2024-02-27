const tg = (window as any).Telegram.WebApp;

function useTelegram() {

    // const onToggleMainButton = () => {
    //     if(tg.MainButton.isVisible) {
    //         tg.MainButton.hide();
    //     } else {
    //         tg.MainButton.show();
    //     }
    // };

    const onAppClose = () => {
        tg.close()
    };

    return {
        // onToggleMainButton,
        onAppClose,
        tg,
        user: tg.initDataUnsafe?.user,
        queryId: tg.initDataUnsafe?.query_id,
    }
};

export default useTelegram;
