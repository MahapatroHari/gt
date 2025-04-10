// app/(common)/flow/page.tsx
'use client'
import styles from './page.module.scss';
import Xarrow from 'react-xarrows';

const FlowPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Flow Page</h1>

      <div className={styles.pageContent}>
        <div className={styles.parentSection}>
          <div className={styles.card} id="parent">
            <div className={styles.mainContent}>
              <h3>Parent Card</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div className={styles.childrenSection}>
          <div className={styles.childCard}>
            <div className={styles.card} id="child1">
              <div className={styles.mainContent}>
                <h3>Child 1</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div className={styles.childCard}>
            <div className={styles.card} id="child2">
              <div className={styles.mainContent}>
                <h3>Child 2</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>

          <div className={styles.childCard}>
            <div className={styles.card} id="child3">
              <div className={styles.mainContent}>
                <h3>Child 3</h3>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>

        <Xarrow
          start="parent"
          end="child1"
          path="smooth"
          color="purple"
          strokeWidth={2}
          headSize={6}
          tailSize={6}
          showHead={false}
          curveness={1.2}
        />
        <Xarrow
          start="parent"
          end="child2"
          path="smooth"
          color="purple"
          strokeWidth={2}
          headSize={6}
          tailSize={6}
          showHead={false}
          curveness={0.8}
        />
        <Xarrow
          start="parent"
          end="child3"
          path="smooth"
          color="purple"
          strokeWidth={2}
          headSize={6}
          tailSize={6}
          showHead={false}
          curveness={1.2}
        />
      </div>
    </div>
  );
};

export default FlowPage;