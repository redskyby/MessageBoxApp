import { Button } from 'antd';
import { useNavigate } from 'react-router';

import { FORM_PAGE } from '../const/const.ts';

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">
            <h1 className="mb-4 text-3xl font-semibold">Добро пожаловать!</h1>
            <p className="mb-6 text-lg text-gray-700">Мы рады видеть вас. Готовы отправить сообщение?</p>
            <Button type="primary" size="large" onClick={() => navigate(FORM_PAGE)} className="px-6 py-2">
                Далее
            </Button>
        </div>
    );
};

export default WelcomePage;
