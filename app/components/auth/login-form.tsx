import { useAuth } from '@/app/context/auth-context/useAuth';
import { isLoadingAtom } from '@/app/context/loading/loading-atom';
import { useSnackBar } from '@/app/context/toast-provider/toastProvider';
import { api } from '@/app/services/api';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';
import { useAtom, useSetAtom } from 'jotai';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FirstLoginAtom } from './auth-atoms';
import { SignInProps } from './login-form-interface';
import { signInSchemaZod } from './login-form-schema';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [firstLogin, setFirstLogin] = useAtom(FirstLoginAtom);
  const setLoading = useSetAtom(isLoadingAtom);
  const auth = useAuth();

  const form = useForm<SignInProps>({
    resolver: zodResolver(signInSchemaZod),
    defaultValues: {
      email: firstLogin?.email,
      password: firstLogin?.password,
    },
  });
  const { showToast } = useSnackBar();

  const handleVerifyCompany: SubmitHandler<SignInProps> = async (values) => {
    try {
      const { data } = await api.post('auth/verify-company', {
        username: values.email,
        password: values.password,
      });
      if (data.length > 1) {
        /*  showToast(
          'Empresa detectada',
          'No momento, nosso servidor está indisponível devido a uma manutenção necessária. Estamos trabalhando para voltar on-line o mais rápido possível. Pedimos desculpas pelo transtorno e agradecemos sua paciência e compreensão. Por favor, tente acessar novamente em alguns minutos.',
          'warning'
        ); */
      } else {
        await handleSignIn(values);
      }
    } catch (err) {
      const axiosError = err as AxiosError;

      if (axiosError?.code === 'ERR_NETWORK')
        if (axiosError?.response?.status === 401) {
          /*  showToast(
          'Manutenção em Andamento',
          'No momento, nosso servidor está indisponível devido a uma manutenção necessária. Estamos trabalhando para voltar on-line o mais rápido possível. Pedimos desculpas pelo transtorno e agradecemos sua paciência e compreensão. Por favor, tente acessar novamente em alguns minutos.',
          'warning'
        ); */
          /*    showToast(
          'Acesso não autorizado',
          'As credenciais informadas não estão corretas. Caso não lembre a senha, você pode solicitar uma nova senha através do link "Esqueci minha senha". Mas caso precisar, entre em contato com o suporte técnico para obter suporte.',
          'warning'
        ); */
        }

      if (axiosError?.response?.status === 423) {
        /*  showToast(
          'Usuário bloqueado',
          "Por motivos de segurança, seu usuário foi bloqueado devido ao excesso de tentativas de login com senha incorreta. Para desbloquear, clique em 'Esqueceu sua senha?' para criar uma nova. Se precisar de ajuda, entre em contato com o suporte.",
          'warning'
        ); */
      }

      if (axiosError?.response?.status === 404) {
        /*  showToast(
          'Usuário não encontrado',
          'Desculpe, não encontramos um usuário vinculado ao seu e-mail em nossa base de dados. Certifique-se de que digitou corretamente o e-mail e tente novamente. Se precisar de ajuda, entre em contato conosco.',
          'warning'
        ); */
      }
    }
  };

  const handleSignIn = async (values: any) => {
    console.log(values);
    setLoading(true);
    setFirstLogin({
      email: '',
      password: '',
    });
    await auth.authenticate({
      email: values.email,
      password: values.password,
      companyId: values?.companyId,
    });
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card className="overflow-hidden ">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form
              onSubmit={(e) => {
                form.handleSubmit(handleVerifyCompany)(e);
              }}
              className="p-6 md:p-8"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Bem-vindo de volta!</h1>
                  <p className="text-balance text-muted-foreground">
                    Faça o login na sua conta Windel
                  </p>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    {...form.register('email')} // Associa o input ao react-hook-form
                    placeholder="m@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Senha</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Esqueceu sua senha?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...form.register('password')} // Associa o input ao react-hook-form
                  />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
                <div className="text-center text-sm">
                  <div> Você ainda não possui uma conta?</div>
                  <a
                    href="#"
                    className="underline underline-offset-4 text-foreground"
                  >
                    Cadastre-se e teste grátis
                  </a>
                </div>
              </div>
            </form>
          </Form>
          <div className="relative hidden bg-muted md:block">
            <img
              src="/placeholder.svg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
        Ao continuar com o login, você aceita todos os{' '}
        <a href="#">Termos de serviços</a> e{' '}
        <a href="#">Políticas de privacidade </a>.
      </div>
    </div>
  );
}
