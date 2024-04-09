import styles from './index.module.scss';

const TECH_MAP = {
  
}

interface Props {
  tech: string;
}

const Tech = (props: tech) => {
  return (
    <div className={styles.tech}>
      <h4>Tech</h4>
    </div>
  );
};

export default Tech;
