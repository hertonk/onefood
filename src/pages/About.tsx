export default function About(){
    return (
        <div>
            <div className="bg-cinza h-screen">
                
            <div>
                <div className="bg-white w-full md:max-w-800 mx-auto p-2 flex flex-row border-b border-gray-200">
                    <a href="/">
                        <svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 19-7-7 7-7"/>
                        </svg>
                    </a>
                    <h1 className="flex-1 text-center">Sobre a loja</h1>
                </div>
                <div className="bg-white shadow-md w-full md:max-w-800 mx-auto p-4 ">
                    <div className='flex flex-row'>
                        <div className='flex flex-col justify-center'>
                            <h2 className='font-bold'>Restaurante e Delivery Gosto Caseiro</h2>
                            <p className='text-xs text-gray-400 flex flex-row items-center'> 
                            <svg stroke="currentColor" className='mr-1' fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="12px" width="12px" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 2v20h-2v-7h-4V8a6 6 0 0 1 6-6zm-2 2.53C18.17 5 17 6.17 17 8v5h2V4.53zM9 13.9V22H7v-8.1A5.002 5.002 0 0 1 3 9V3h2v7h2V3h2v7h2V3h2v6a5.002 5.002 0 0 1-4 4.9z"></path></g></svg> Comida Caseira </p>
                            <p className="text-gray-400 text-sm mt-3">Desde 2015 servindo sabor, preparado da melhor forma possível. Da nossa família para a sua.</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:max-w-800 mx-auto bg-[url('../public/new-waves.svg')] h-2 mb-2 no-repat">
                </div>
                <div className="bg-white w-full md:max-w-800 mx-auto p-4 flex flex-col shadow-md my-5">
                    <div className="mb-2 flex flex-row items-center">
                        <svg className="w-4 h-4 text-black mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.8 14h0a7 7 0 1 0-11.5 0h0l.1.3.3.3L12 21l5.1-6.2.6-.7.1-.2Z"/>
                        </svg>
                        <h1 className="font-bold text-sm">Endereço</h1>
                    </div>
                    <div>
                        <p className="text-gray-400 text-sm">/PA</p>
                    </div>
                </div>

                <div className="bg-white w-full md:max-w-800 mx-auto p-4 flex flex-col shadow-md my-5">
                    <div className="mb-2 flex flex-row items-center">
                        <svg className="w-4 h-4 text-black mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h1 className="font-bold text-sm">Horário de Funcionamento</h1>
                    </div>
                    <div>
                        <p className="text-black font-bold text-sm">Todos os dias</p>
                        <p className="text-gray-400 text-sm">10h30 às 15h30</p>
                    </div>
                </div>
                <div className="bg-white w-full md:max-w-800 mx-auto p-4 flex flex-col shadow-md my-5">
                    <div className="mb-2 flex flex-row items-center">
                        <svg className="w-4 h-4 text-black mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 17.3a5 5 0 0 0 2.6 1.7c2.2.6 4.5-.5 5-2.3.4-2-1.3-4-3.6-4.5-2.3-.6-4-2.7-3.5-4.5.5-1.9 2.7-3 5-2.3 1 .2 1.8.8 2.5 1.6m-3.9 12v2m0-18v2.2"/>
                        </svg>
                        <h1 className="font-bold text-sm">Formas de Pagamento</h1>
                    </div>
                    <div>
                        <p className="text-gray-400 text-xs">Pagamento na entrega</p>
                        <p className="text-sm font-bold mt-2">Débito</p>
                        <p className="text-sm font-bold mt-2">Crédito</p>
                        <p className="text-sm font-bold mt-2">Dinheiro</p>
                    </div>
                </div>
                <div className="w-full md:max-w-800 mx-auto">
                    <a href="/" className="bg-vinho rounded-lg text-white mx-3 block p-3 text-center">Voltar para o cardápio</a>
                </div>
            </div>
            <div className='w-full md:max-w-800 mx-auto flex flex-row p-5 pb-20 items-center justify-center'>
                <span className='text-xs text-gray-400 mr-1'>Uma experiência</span>
                <span className='text-gray-400 font-bold'>OneFood</span>
            </div>
            </div>
        
        </div>
    );
}