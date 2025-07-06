export function Footer() {
  return (
    <footer className="border-t border-border/40 py-8 text-center text-sm text-muted-foreground">
      <div className="container">
        <p>&copy; {new Date().getFullYear()}  دليلك في ماليزيا. جميع الحقوق محفوظة المنذر </p>
        <p className="mt-1">
        صُمم بحب بواسطة المنذر حامد لكل من يرغب بالدراسة في ماليزيا.
        </p>
      </div>
    </footer>
  );
}
