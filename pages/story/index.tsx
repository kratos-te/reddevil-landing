import { motion } from 'framer-motion'
import WavyText from '../../global_componenets/WavyText'
import Showstory from '../../components/Showstory'
import Header from '../../components/Header'

export default function Story() {
    return (
        <div className="flex flex-col">
            <Header />
            <Showstory />
        </div>
  )
}
