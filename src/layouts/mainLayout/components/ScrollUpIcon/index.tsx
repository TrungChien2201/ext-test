import ArrowUpIcon from '@/assets/icons/arrowUp.svg';

const ScrollUpIcon = () => {

    const scrollUpToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

     return (
        <div className='arrow-icon' >
            <img onClick={scrollUpToTop} src={ArrowUpIcon} />
        </div>
     )
}

export default ScrollUpIcon;