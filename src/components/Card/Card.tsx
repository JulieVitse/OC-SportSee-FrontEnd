/** props types */
import { CardProps } from 'types/components.types';
/** styles */
import styles from './Card.module.scss'

/**
 * Component displaying cards with the user's nutrition data
 * @component
 * @param {CardProps} props - types of the props
 * @param {number} props.value - The nutrition value
 * @param {string} props.name - The name of the nutrition value
 * @param {string} props.unit - The unit following the value
 * @param {string} props.image - The icon of the card
 * @param {string} props.color - The background color of the icon
 * @returns {JSX.Element} A card component with the user's nutrition data
 */

export function Card({ value, name, unit, image, color } : CardProps): JSX.Element {
    return (
      <div className={styles.card}>
        <img
          src={image}
          alt={`${name} icon`}
          className={[styles['card__image'], styles[`card__image--${color}`]].join(' ')}
        />
        <div className={styles.card__text}>
          <h4 className={styles.card__text__value}>
            {value}
            {unit}
          </h4>
          <p className={styles.card__text__title}>{name}</p>
        </div>
      </div>
    )
}