import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './validation.schema';
import { defaultValues } from './data';

export default function useCreator() {
  const formManager = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { watch, handleSubmit } = formManager;

  const publish = handleSubmit(() => (data) => console.log(JSON.stringify(data)));

  const save = (values) => {
    console.log(values);
  };

  watch();

  return {
    formManager,
    publish,
    save,
  };
}
