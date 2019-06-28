import Configuration from "./Configuration";
import Console from "./Console";

const NOTIFICATION_DELAY: Number = 4000,
    NOTIFICATION_REMOVE_DELAY: Number = 100,
    LOG_PREFIX: string = "notifications | ";

let $notification: JQuery;

(($) => {
    $(() => {
        $notification = $('.ns-box');
        if ($notification.length) {
            initNotifications()
        }
    });
})(jQuery);

function initNotifications(): void {
    Console.debug("%s initNotifications", LOG_PREFIX);
    if (!$notification.hasClass('background-error')) {
        setTimeout(() => {
            closeNotification();
        }, NOTIFICATION_DELAY);
    }

    $(document).on('click', '.ns-close', (event: JQueryEventObject) => {
        event.preventDefault();
        closeNotification();
    });
}

function closeNotification(): void {
    Console.debug("%s closeNotification", LOG_PREFIX);
    $notification.removeClass('ns-show').addClass('ns-hide');
    removeNotification();
}

function removeNotification(): void {
    Console.debug("%s removeNotification", LOG_PREFIX);
    setTimeout(() => {
        $notification.remove();
    }, NOTIFICATION_REMOVE_DELAY);
}

export default function displayNotification(type: string, message: string): void {
    Console.debug("%s displayNotification [%s / %s]", LOG_PREFIX, type, message);
    let backgroundClass: string = `background-${type}`,
        iconClass: string = "";
    switch (type) {
        case Configuration.MESSAGE_TYPE_ERROR:
            iconClass = Configuration.ICON_ERROR;
            break;
        case Configuration.MESSAGE_TYPE_WARNING:
            iconClass = Configuration.ICON_WARNING;
            break;
        case Configuration.MESSAGE_TYPE_SUCCESS:
            iconClass = Configuration.ICON_INFO;
            break;
        default :
            iconClass = Configuration.ICON_SUCCESS;
    }
    const template = `
                    <div class="ns-box ns-bar ns-effect-slidetop ns-type-notice ns-show ${backgroundClass}">
                        <div class="ns-box-inner">
                            <span class="notification-icon fa ${iconClass}"></span>
                            <p class="notification-message color-danger">${message}</p>
                        </div>
                        <span class="ns-close"></span>
                    </div>
                `;
    $('body').append(template);
    $notification = $('.ns-box');
    initNotifications();
}

export function displayAxiosErrorNotification(error: any, ...params: any[]): void {
    let message: string = "";
    if (error.response) {
        message = `Error ${error.status} : ${error.response.data} (${params})`;
    } else {
        message = error.message;
    }
    displayNotification(Configuration.MESSAGE_TYPE_ERROR, message);
}
