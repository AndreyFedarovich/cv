import React, { useState } from 'react';
import { FormProvider } from 'react-hook-form';
import cn from 'classnames';
import FullScreenToggle from '../../components/buttons/full-screen-toogle';
import CreatorForm from './creator-form';
import CreatorPreview from './creator-preview';
import CreatorPanel from './creator-panel';
import useCreator from './use-creator';
import s from './cv-creator.module.scss';
// import { GET_USERS } from '../../graphql/query/user';

const Creator = () => {
  // const { data, loading, error } = useQuery(GET_USERS);
  // const [users, setUsers] = useState([]);
  // console.log(data);
  const [isFull, setFull] = useState(false);
  const { formManager, publish, save } = useCreator();

  // useEffect(() => {
  //   if (!loading) {

  //   }
  // }, [data]);
  return (
    <div className={cn(s.wrap, { [s.full]: isFull })}>
      <FormProvider {...formManager}>
        <div className={s.content}>
          <CreatorPreview />
        </div>
        <form onSubmit={publish} className={s.bar}>
          <CreatorPanel save={save} />
          <FullScreenToggle onClick={() => setFull(!isFull)} />
          <CreatorForm />
        </form>
      </FormProvider>
    </div>
  );
};

Creator.propTypes = {};

export default Creator;
