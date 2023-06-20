import styles from './SubmitButton.module.css'

function SubmitButton({  text, name, options, handleOnChange, value }) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
     <submitButton name={name} id={name}>
        <option>Selecione uma opção</option>
     </submitButton>
    </div>
  )
}

export default SubmitButton