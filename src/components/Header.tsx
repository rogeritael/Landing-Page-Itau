import Image from 'next/image'
import Logo from '@/assets/logo.svg'
import { ItemMenu } from './ItemMenu'
import { Search } from './Search'

import IconUser from '@/assets/icon-user.svg'
import { Container } from './Container'

export function Header(){
    return (
        <header className='relative flex items-center w-full h-20 bg-primary-orange'>
            {/* <div className='absolute top-0 right-0 bg-primary-blue h-full w-[19%]'></div> */}
            <Container>
                <div className='flex flex-1 items-center justify-between' >
                    <div className='flex items-center gap-14'>
                        <Image
                            src={Logo}
                            alt='logo'
                        />
                        <ul className='flex items-center gap-14'>
                            <li>
                                <ItemMenu name='Para você'/>
                            </li>
                            <li>
                                <ItemMenu name='Para empresas'/>
                            </li>
                            <li>
                                <ItemMenu name='Serviços'/>
                            </li>
                            <li>
                                <ItemMenu name='Ajuda'/>
                            </li>
                        </ul>
                    </div>
                    <Search />
                </div>
                <button className='flex items-center gap-4 bg-primary-blue h-20 pl-10 pr-20'>
                    <Image
                        src={IconUser}
                        alt='user icon'
                    />
                    <span>
                        <span className='text-white font-bold'>Acessar conta</span>
                    </span>
                </button>
            </Container>
        </header>
    )
}