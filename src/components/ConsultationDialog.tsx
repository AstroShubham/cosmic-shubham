import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name") as string,
      dob: data.get("dob") as string,
      tob: data.get("tob") as string,
      pob: data.get("pob") as string,
      mobile: data.get("mobile") as string,
      message: data.get("message") as string,
    };

    // Close immediately and show success toast
    onOpenChange(false);
    form.reset();
    toast({
      title: "Request Sent! ✨",
      description: "Your consultation request has been submitted. We'll contact you soon.",
    });

    // Send email in the background (fire-and-forget)
    supabase.functions.invoke('send-consultation-email', { body: payload }).catch((err) => {
      console.error('Email send error:', err);
      const whatsappText = encodeURIComponent(
        `🙏 New Consultation Request\n\nName: ${payload.name}\nDate of Birth: ${payload.dob}\nTime of Birth: ${payload.tob}\nPlace of Birth: ${payload.pob}\nMobile: ${payload.mobile}\nMessage: ${payload.message}`
      );
      window.open(`https://wa.me/917707062337?text=${whatsappText}`, "_blank");
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-cosmic-dark border-gold/20 text-spiritual-beige max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-gold text-center">Book Consultation</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div>
            <Label className="text-spiritual-beige/80 text-sm">Full Name</Label>
            <Input name="name" required placeholder="Enter your name" className="bg-spiritual-beige/10 border-gold/20 text-spiritual-beige placeholder:text-spiritual-beige/40 mt-1" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-spiritual-beige/80 text-sm">Date of Birth</Label>
              <Input name="dob" type="date" required className="bg-spiritual-beige/10 border-gold/20 text-spiritual-beige mt-1 [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-70" />
            </div>
            <div>
              <Label className="text-spiritual-beige/80 text-sm">Time of Birth</Label>
              <Input name="tob" type="time" required className="bg-spiritual-beige/10 border-gold/20 text-spiritual-beige mt-1 [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-70" />
            </div>
          </div>
          <div>
            <Label className="text-spiritual-beige/80 text-sm">Place of Birth</Label>
            <Input name="pob" required placeholder="Enter your birthplace" className="bg-spiritual-beige/10 border-gold/20 text-spiritual-beige placeholder:text-spiritual-beige/40 mt-1" />
          </div>
          <div>
            <Label className="text-spiritual-beige/80 text-sm">Mobile Number</Label>
            <Input name="mobile" type="tel" required placeholder="+91 XXXXX XXXXX" className="bg-spiritual-beige/10 border-gold/20 text-spiritual-beige placeholder:text-spiritual-beige/40 mt-1" />
          </div>
          <div>
            <Label className="text-spiritual-beige/80 text-sm">Message</Label>
            <Textarea name="message" placeholder="Describe your query..." rows={3} className="bg-spiritual-beige/10 border-gold/20 text-spiritual-beige placeholder:text-spiritual-beige/40 mt-1" />
          </div>
          <button type="submit" className="btn-gold w-full py-3 text-base">
            Submit Consultation Request
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
