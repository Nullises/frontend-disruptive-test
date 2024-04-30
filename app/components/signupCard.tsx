"use client";
import {
  Button,
  Card,
  Typography,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
} from "../components/common/material";

export function SignupCard({ signup, form, setForm }: any) {
  return (
    <Card className="w-96 bg-white-100">
      <CardHeader
        variant="filled"
        className="mb-4 grid h-28 place-items-center bg-primary-300"
      >
        <Typography variant="h3" color="white" className="text-white-100">
          Crea una cuenta
        </Typography>
        <Typography variant="small" color="white" className="text-white-100">
          ¡Es totalmente gratis!
        </Typography>
      </CardHeader>
      <CardBody className="flex flex-col gap-4">
        <Input
          label="Nombre de usuario"
          size="lg"
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          crossOrigin={undefined}
        />
        <Input
          label="Correo Electrónico"
          size="lg"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          crossOrigin={undefined}
        />
        <Input
          label="Contraseña"
          size="lg"
          crossOrigin={undefined}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
      </CardBody>
      <CardFooter className="pt-0">
        <Button
          variant="filled"
          className="text-white-100  bg-primary-300"
          fullWidth
          onClick={() => signup(form)}
        >
          Registrarte
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          ¿Ya tienes una cuenta?
          <Typography
            as="a"
            href="/sign-in"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            ¡Ingresa!
          </Typography>
        </Typography>
      </CardFooter>
    </Card>
  );
}
