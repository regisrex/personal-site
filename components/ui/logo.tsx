import LogoVector from '@/vecs/logo.svg';
import Image from 'next/image';

export default function Logo() {
    return (
        <Image src={LogoVector} alt=''  className="" />
    );
}

