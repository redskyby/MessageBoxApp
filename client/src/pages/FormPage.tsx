import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';

type FormData = {
    name: string;
    phone: string;
    message: string;
};

const FormPage = () => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isValid },
    } = useForm<FormData>({
        mode: 'onChange', // проверка валидности в реальном времени
        defaultValues: { name: '', phone: '', message: '' },
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [serverMessage, setServerMessage] = useState<string | null>(null);

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setServerMessage(null);

        try {
            // имитация отправки на сервер
            console.log(data);

            setServerMessage('✅ Форма успешно отправлена!');
            // reset();
        } catch (err) {
            setServerMessage('❌ Ошибка отправки. Попробуйте ещё раз.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={'flex h-screen w-full items-center justify-center'}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="mx-auto mt-16 h-auto h-max max-w-md space-y-6 rounded-3xl bg-gradient-to-r from-white via-gray-50 to-white p-8 shadow-lg"
            >
                <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Форма обратной связи</h2>

                {/* Имя */}
                <div className="relative">
                    <label className="text-gray-00 mb-1 block text-sm font-medium">Имя</label>
                    <input
                        {...register('name', {
                            required: 'Введите имя',
                            minLength: { value: 2, message: 'Минимум 2 символа' },
                        })}
                        type="text"
                        className={`w-full rounded-xl border p-3 text-gray-800 placeholder-gray-400 transition focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                            errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Ваше имя"
                    />
                    {errors.name && <p className="animate-fade mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>

                {/* Телефон с маской */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Телефон</label>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            required: 'Введите телефон',
                            pattern: {
                                value: /^\+375 \(\d{2}\) \d{3}-\d{2}-\d{2}$/,
                                message: 'Формат: +375 (XX) XXX-XX-XX',
                            },
                        }}
                        render={({ field }) => (
                            <IMaskInput
                                {...field}
                                mask="+375 (00) 000-00-00"
                                className={`w-full rounded-xl border p-3 text-gray-800 placeholder-gray-400 transition focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                                    errors.phone ? 'border-red-500' : 'border-gray-300'
                                }`}
                                placeholder="+375 (__) ___-__-__"
                            />
                        )}
                    />
                    {errors.phone && <p className="animate-fade mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                </div>

                {/* Сообщение */}
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Сообщение</label>
                    <textarea
                        {...register('message', {
                            required: 'Введите сообщение',
                            minLength: { value: 2, message: 'Минимум 2 символа' },
                        })}
                        className={`w-full resize-none rounded-xl border p-3 text-gray-800 placeholder-gray-400 transition focus:ring-2 focus:ring-blue-400 focus:outline-none ${
                            errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                        rows={5}
                        placeholder="Ваше сообщение..."
                    />
                    {errors.message && (
                        <p className="animate-fade mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                </div>

                {/* Кнопка */}
                <button
                    type="submit"
                    disabled={!isValid || isSubmitting} // блокировка кнопки
                    className={`w-full transform rounded-xl px-6 py-3 font-semibold text-white transition hover:scale-105 ${
                        !isValid || isSubmitting
                            ? 'cursor-not-allowed bg-gray-400'
                            : 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg hover:from-indigo-600 hover:to-blue-500'
                    }`}
                >
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </button>

                {serverMessage && <p className="mt-4 text-center font-medium text-gray-700">{serverMessage}</p>}
            </form>
        </div>
    );
};

export default FormPage;
