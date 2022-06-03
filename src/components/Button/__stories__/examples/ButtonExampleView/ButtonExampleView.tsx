import React from 'react';

import {Button} from '../../..';
import {Icon} from '../../../../Icon';
import {GearIcon} from '../../../../icons';
import {DocsExample} from '../../../../../demo/DocsExample/DocsExample';

export function ButtonExampleViewAction() {
    return (
        <DocsExample space="s">
            <Button view="action">Создать</Button>
            <Button view="action">
                Подключиться
                {/* TODO ConnectIcon */}
                <Icon data={GearIcon} size={16} />
            </Button>
            <Button view="action">
                {/* TODO EditIcon */}
                <Icon data={GearIcon} size={16} />
            </Button>
        </DocsExample>
    );
}

ButtonExampleViewAction.code = `
<Button view="action">Создать</Button>
<Button view="action">
    Подключиться
    <Icon data={GearIcon} size={16} />
</Button>
<Button view="action">
    <Icon data={GearIcon} size={16} />
</Button>
`.trim();

export function ButtonExampleViewNormal() {
    return (
        <DocsExample space="s">
            <Button view="normal">Добавить</Button>
            <Button view="normal">
                Запустить
                {/* TODO RunIcon */}
                <Icon data={GearIcon} size={16} />
            </Button>
            <Button view="normal">
                {/* TODO RefreshIcon */}
                <Icon data={GearIcon} size={16} />
            </Button>
        </DocsExample>
    );
}

ButtonExampleViewNormal.code = `
<Button view="normal">Добавить</Button>
<Button view="normal">
    Запустить
    <Icon data={GearIcon} size={16} />
</Button>
<Button view="normal">
    <Icon data={GearIcon} size={16} />
</Button>
`.trim();

export function ButtonExampleViewOutlined() {
    return (
        <DocsExample space="s">
            <Button view="outlined">Отменить</Button>
            <Button view="outlined">
                Прикрепить
                {/* TODO AttachIcon */}
                <Icon data={GearIcon} size={16} />
            </Button>
            <Button view="outlined">
                {/* TODO CopyIcon */}
                <Icon data={GearIcon} size={16} />
            </Button>
        </DocsExample>
    );
}

ButtonExampleViewOutlined.code = `
<Button view="outlined">Отменить</Button>
<Button view="outlined">
    Прикрепить
    <Icon data={GearIcon} size={16} />
</Button>
<Button view="outlined">
    <Icon data={GearIcon} size={16} />
</Button>
`.trim();

export function ButtonExampleViewFlat() {
    return (
        <DocsExample space="s">
            <Button view="flat">Развернуть</Button>
            <Button view="flat">
                {/* TODO CloseIcon */}
                <Icon data={GearIcon} size={16} />
            </Button>
        </DocsExample>
    );
}

ButtonExampleViewFlat.code = `
<Button view="flat">Развернуть</Button>
<Button view="flat">
    <Icon data={GearIcon} size={16} />
</Button>
`.trim();
