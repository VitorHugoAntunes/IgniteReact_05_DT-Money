import { HeaderContainer, HeaderContent, NewTransationButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoDTMoney from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'

// Chamando um modal global a partir do botao do header
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDTMoney} alt="Logo DT Money" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransationButton>Nova transação</NewTransationButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
