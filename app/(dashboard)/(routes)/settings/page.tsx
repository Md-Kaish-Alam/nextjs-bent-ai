import { SettingsIcon } from "lucide-react";

import { Heading } from "@/components/heading";
import { checkSubscription } from "@/lib/subscription";
import { SubscriptionButton } from "@/components/subscription-button";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div>
      <Heading
        title="Settings"
        description="Manage Account settings"
        icon={SettingsIcon}
        iconColor="text-gray-700"
        bgColor="bg-gray-700/10"
      />
      <div className="px-4 lg:px-8 space-y-4">
        <div className="text-muted-foreground text-sm">
          {isPro
            ? "You are Currently on Pro Plan"
            : "You are currently on Free Plan"}
        </div>
        <SubscriptionButton isPro={isPro} />
      </div>
    </div>
  );
};

export default SettingsPage;
