import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@apollo/client';
import { schema } from './validation.schema';
import { defaultValues } from './data';
import { ADD_RESUME } from '../../graphql/mutation/resume';

export default function useCreator() {
  const formManager = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues,
  });
  const { watch, handleSubmit } = formManager;
  const [addResume] = useMutation(ADD_RESUME);

  const publish = handleSubmit(() => (data) => console.log(JSON.stringify(data)));

  const save = async (values) => {
    const { data } = await addResume({
      variables: {
        userId: '6040d0d8bd545aaa06754c73',
        name: values.name,
        lastname: values.lastname,
        email: values.email,
        phoneNumber: values.phoneNumber,
        position: values.position,
        isPublished: false,
      },
    });
    console.log(data.addResume.id);
  };

  watch();

  return {
    formManager,
    publish,
    save,
  };
}
