import NovoLeilao from '@/views/NovoLeilao';
import { mount } from '@vue/test-utils';
import { createLeilao } from '@/http';

jest.mock('@/http');

const $router = {
    push: jest.fn()
}

describe('Um novo leilão deve ser criado.', () => {
    test('Dado um formulário preenchido, um leilão deve ser criado.', async () => {
        createLeilao.mockResolvedValueOnce();

        const wrapper = mount(NovoLeilao, {
            mocks: {
                $router
            }
        });

        wrapper.find('.produto').setValue('Um livro da Casa do Código');
        wrapper.find('.descricao').setValue('Conteúdo de primeira.');
        wrapper.find('.valor').setValue(50);
        wrapper.find('form').trigger('submit');

        expect(createLeilao).toHaveBeenCalled();
    });
});