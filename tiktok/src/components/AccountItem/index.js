import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        alt="avatar"
        src="https://my-test-11.slatic.net/p/9006e789953adec7d498badcf01a7fe4.jpg"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Ngoc Zuong</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenduong</span>
      </div>
    </div>
  );
}

export default AccountItem;
