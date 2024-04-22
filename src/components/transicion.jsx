import { motion } from 'framer-motion';


export default (Comp) => {
    return (
        <>
            <Comp />
            <motion.div className='slide-in'
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.75 }}
            />
            {/* <motion.div className='slide-out'
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ delay: 0.75, duration: 0.75 }}
            /> */}
        </>)
}