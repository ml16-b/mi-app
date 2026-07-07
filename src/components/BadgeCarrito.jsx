import { useCartStore } from '../store/useCartStore';

function BadgeCarrito() {
    const items = useCartStore((state) => state.items);

    return <span className='badge'>{items}</span>;
}