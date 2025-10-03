import Section from "../../components/Section/Section";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <Section>
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <p className={css.description}>
          Ласкаво просимо до  веб-додатку для зберігання телефонних
          контактів! Тут ви можете додавати, редагувати та переглядати ваші
          контакти. Щоб почати, будь ласка, спочатку зареєструйтеся або увійдіть
          у свій акаунт.
        </p>
      </div>
    </Section>
  );
};

export default HomePage;
